import { useState, useEffect, ChangeEventHandler, useMemo } from 'react';
import { useForm, SubmitHandler, Controller, useFieldArray } from "react-hook-form";
import styled, { ThemeProvider } from "styled-components";
import { MainButton, MainHeading, SmallHeading } from "./StyledComponents";
import DatePicker from "./Datepicker";
import FormDropdown from "./FormDropdown";
import SVG from "react-inlinesvg";
import { ZodType, z } from "zod"
import {v4 as uuidv4} from 'uuid'
import { useLayoutContext } from './Layout';
import { zodResolver } from "@hookform/resolvers/zod"
import moment from 'moment';

import { 
    FormContainer,
    Form,
    GoBackHeading,
    BillFromContainer,
    BillToContainer,
    FormHeading,
    InputContainer,
    LabelContainer,
    InputLabel,
    ErrorLabel,
    InputDividedContainer,
    DropdownContainer,
    ItemContainer,
    ItemListHeading,
    ItemListContainer,
    TotalPriceContainer,
    AddButton,
    ItemListInputContainer,
    EditButtonContainer,
    CancelButton, 
    TotalInputContainer,
    NewButtonContainer,
    DiscardButton,
    DraftButton,
}   from './Form.styled';
import { useNavigate } from 'react-router-dom';

type FormComponentProps = {
    setIsFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isFormOpen: boolean;
    isDarkMode: boolean;
    userFormData: any;
    setUserFormData: any;
    isFormEdit: boolean;
    setIsFormEdit: React.Dispatch<React.SetStateAction<boolean>>;
    invoiceData: any;
    setInvoiceData: React.Dispatch<React.SetStateAction<any>>;
    data: any;
    setData: any
};
const DarkTheme = {
    formBg: "#141625",
    inputBorder: "1px solid #252945",
    inputBg: "#1E2139",
    altBg: "#252945",
    altBgHover:"#2b2e47",
    inputBorderHover:"1px solid #2d3153",
    labelColor:"#DFE3FA",  
    scrollBg:"#141625",
    discardBg:"#F9FAFE",
    draftBgHover:"#1E2139",
    draftColor:"#888EB0",
    inputColor:"#FFFFFF",
}
const LightTheme = {
    formBg: "#FFF",
    inputBorder: "1px solid #DFE3FA",
    inputBg: "#FFF",
    altBg:"#F9FAFE;",
    altBgHover:"#DFE3FA",
    inputBorderHover:"1px solid #7C5DFA",
    labelColor:"#7E88C3",
    scrollBg:"#FFFFFF",
    discardBg:"#F9FAFE",
    draftBgHover:"#0C0E16",
    draftColor:"#DFE3FA",
    inputColor:"#000000",
}
export default function FormComponent({ setIsFormOpen, isFormOpen, isDarkMode, userFormData, setUserFormData, isFormEdit, setIsFormEdit, invoiceData, setInvoiceData }:FormComponentProps) {
    const [isSubmit, setIsSubmit] = useState(false)
    const [duePayment, setDuePayment] = useState('')
    const [itemsTotal, setItemsTotal] = useState(0)
    const [usedIds, setUsedIds] = useState<any>()
    const navigate = useNavigate()
    interface FormInputs {
        clientAddress?:{
            street?: string;
            city?: string;
            postCode?: number;
            country?: string;
        },
        clientEmail: string;
        clientName: string;
        createdAt: string | null;
        description: string;
        id:string;
        items?: {
            name?: string;
            quantity?: number | undefined;
            price?: number | undefined;
            total?: number | undefined;
        }[]
        paymentDue: string;
        paymentTerms: number | null;
        status: string;
        senderAddress?:{
            street?: string;
            city?: string;
            postCode?: number;
            country?: string;
        },
        total: number;
    }
    
    const schema = z.object({
        clientAddress: z.object({
            city: z.string().nonempty({message: "can't be empty"}),
            country: z.string().nonempty({message: "can't be empty"}),
            postCode: z.string().nonempty({message: "can't be empty"}),
            street: z.string().nonempty({message: "can't be empty"}),
        }),
        clientEmail: z.string().nonempty({message: "can't be empty"}).email({message: 'invalid email address'}),
        clientName: z.string().nonempty({message: "can't be empty"}),
        createdAt: z.string(),
        description: z.string().nonempty({message: "can't be empty"}),
        id: z.string(),
        items: z.array(z.object({
            name: z.string().nonempty(),
            price: z.any(),
            quantity: z.any(),
            total: z.number(),
        })).min(1, {message: "an item must be added"}),
        paymentDue: z.string(),
        paymentTerms: z.number().min(1).max(30),
        senderAddress: z.object({
            city: z.string().nonempty({message: "can't be empty"}),
            country: z.string().nonempty({message: "can't be empty"}),
            postCode: z.string().nonempty({message: "can't be empty"}),
            street: z.string().nonempty({message: "can't be empty"}),
        }),
        status: z.string(),
        total: z.number(),
    })
    
    const draftSchema = z.object({
        description: z.string().optional(),
        clientName: z.string().optional(),
        clientEmail: z.string().optional(),
        status: z.string().optional(),
        senderAddress: z.object({
            street: z.string().optional(),
            city: z.string().optional(),
            postCode: z.string().optional(),
            country: z.string().optional(),
        }).optional(),
        clientAddress: z.object({
            street: z.string().optional(),
            city: z.string().optional(),
            postCode: z.string().optional(),
            country: z.string().optional(),
        }).optional(),
        items: z.array(
        z.object({
            name: z.string().optional(),
            quantity: z.any().optional(),
            price: z.any().optional(),
            total: z.number().optional(),
        }),
        ).optional(),
    });

    const {
        register,
        formState: { errors },
        handleSubmit,
        control,
        reset,
        watch,
        getValues,
        setValue,
    } = useForm<FormInputs>({
        resolver: zodResolver(schema),
        defaultValues: isFormEdit ? invoiceData.items ? {
            clientAddress: {
                city: invoiceData.clientAddress.city,
                country: invoiceData.clientAddress.country,
                postCode: invoiceData.clientAddress.postCode,
                street: invoiceData.clientAddress.street,
            },
            clientEmail: invoiceData.clientEmail,
            clientName: invoiceData.clientName,
            createdAt: invoiceData.createdAt,
            description: invoiceData.description,
            id: invoiceData.id,
            items: invoiceData.items.map((item:any) =>({
                name: item.name,
                price: item.price,
                quantity: item.quantity,
                total: item.total,
            })),
            paymentDue: invoiceData.paymentDue,
            paymentTerms: invoiceData.paymentTerms,
            senderAddress: {
                city: invoiceData.senderAddress.city,
                country: invoiceData.senderAddress.country,
                postCode: invoiceData.senderAddress.postCode,
                street: invoiceData.senderAddress.street,
            },
            status: invoiceData.status,
            total: invoiceData.total,
        } : 
        {
            clientAddress: {
                city: invoiceData.clientAddress.city,
                country: invoiceData.clientAddress.country,
                postCode: invoiceData.clientAddress.postCode,
                street: invoiceData.clientAddress.street,
            },
            clientEmail: invoiceData.clientEmail,
            clientName: invoiceData.clientName,
            createdAt: invoiceData.createdAt,
            description: invoiceData.description,
            id: invoiceData.id,
            items: [],
            paymentDue: invoiceData.paymentDue,
            paymentTerms: invoiceData.paymentTerms,
            senderAddress: {
                city: invoiceData.senderAddress.city,
                country: invoiceData.senderAddress.country,
                postCode: invoiceData.senderAddress.postCode,
                street: invoiceData.senderAddress.street,
            },
            status: invoiceData.status,
            total: invoiceData.total,
        } : undefined
    });

    const { fields, append, remove, } = useFieldArray({
        name:'items',
        control,
    })

    function handleTotalPrice(index: number): any {
        const quantity = watch(`items.${index}.quantity`) as unknown as number;
        const price = watch(`items.${index}.price`) as unknown as number;
        const watchTotal = watch(`items.${index}.total`) as unknown as number;
        let total = undefined;
    
        if (quantity !== undefined && price !== undefined) {
          total = quantity * price;
        }
    
        if(watchTotal != total){
            if(!Number.isNaN(watchTotal) && !Number.isNaN(total)){
                setValue(`items.${index}.total`, total)
            }
        }

    }

    useEffect(() =>{
        if(watch('paymentDue') != undefined && watch('paymentTerms') != undefined){
            setDuePayment(moment(watch('createdAt')).add(watch('paymentTerms'), 'days').format('YYYY-MM-DD'))
    }
    },[watch('createdAt'), watch('paymentTerms')])
    
    useEffect(() =>{
        setValue('paymentDue', duePayment)
    }, [duePayment])

    function handleClose(e:any){
        setIsFormOpen(false)
        setIsFormEdit(false)
    }

    function onSave(): void {
        setValue('status', 'draft')
        const formData = getValues()
        const data = draftSchema.parse(formData)
        if(!isFormEdit){
            setUserFormData(formData);
            setIsSubmit(true);
            setIsFormOpen(false);
            reset();
            setInvoiceData(undefined)
        } else{
            setUserFormData(formData)
            navigate('..')
            setIsSubmit(true);
            setIsFormOpen(false);
            reset();
        }

    }

    function onSubmit(data: FormInputs): void {
        if(!isFormEdit){
            setUserFormData(data);
            setIsSubmit(true);
            setIsFormOpen(false);
            reset();
        } else{
            const formData = getValues()
            const result = {...formData, status:'pending'}
            setUserFormData(result)
            navigate('..')
            setIsSubmit(true);
            setIsFormOpen(false);
            reset();
        }
    }

    function generateID() {
        let uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let numbers = "0123456789";
        let id = "";
        for (let i = 0; i < 2; i++) {
          id += uppercaseLetters.charAt(Math.floor(Math.random() * uppercaseLetters.length));
        }
        for (let i = 0; i < 4; i++) {
          id += numbers.charAt(Math.floor(Math.random() * numbers.length));
        }
        return id;
    }

    useEffect(() => {
        if(watch('createdAt') != null && watch('paymentDue') != null){
            setDuePayment(moment(watch('createdAt')).add(watch('paymentTerms'), 'days').format('YYYY-MM-DD'))
            setValue('paymentDue', duePayment)
        }
    }, [watch('createdAt'), watch('paymentTerms')])

    useEffect(() => {
        let sum = 0;
        for (let i = 0; i < fields.length; i++) {
            const quantity = Number(watch(`items.${i}.quantity`)) || 0;
            const price = Number(watch(`items.${i}.price`)) || 0;
            sum += quantity * price;
        }
        setItemsTotal(sum);
    }, [watch(), fields]);

    useEffect(() =>{
        setValue('total', itemsTotal)
    }, [itemsTotal])
    
    return (
        <ThemeProvider theme={isDarkMode ? DarkTheme : LightTheme}>
            <FormContainer>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <GoBackHeading onClick={handleClose}>
                        <SVG src="\assets\icon-arrow-left.svg" />
                        <SmallHeading>Go Back</SmallHeading>
                    </GoBackHeading>
                    {isFormEdit ? 
                    <MainHeading>Edit #{invoiceData.id}</MainHeading>
                    :
                    <MainHeading>New Invoice</MainHeading>
                    }
                    <BillFromContainer>
                        <FormHeading>Bill From</FormHeading>
                        <InputContainer>
                            <LabelContainer>
                                <InputLabel htmlFor="senderStreet">
                                    Street Address
                                </InputLabel>
                                {errors.senderAddress?.street && (
                                    <ErrorLabel>can't be empty</ErrorLabel>
                                )}
                            </LabelContainer>
                            <input
                                className={
                                    errors.senderAddress?.street ? "full error" : "full"
                                }
                                type="text"
                                id="senderStreet"
                                {...register("senderAddress.street", { required: true })}
                            />
                        </InputContainer>
                        <InputDividedContainer>
                            <InputContainer>
                                <LabelContainer>
                                    <InputLabel htmlFor="senderCity">City</InputLabel>
                                    {errors.senderAddress?.city && (
                                        <ErrorLabel>can't be empty</ErrorLabel>
                                    )}
                                </LabelContainer>
                                <input
                                    className={errors.senderAddress?.city ? "error" : ""}
                                    type="text"
                                    id='senderCity'
                                    {...register("senderAddress.city", { required: true })}
                                />
                            </InputContainer>
                            <InputContainer>
                                <LabelContainer>
                                    <InputLabel htmlFor="senderPostCode">
                                        Post Code
                                    </InputLabel>
                                    {errors.senderAddress?.postCode && (
                                        <ErrorLabel>can't be empty</ErrorLabel>
                                    )}
                                </LabelContainer>
                                <input
                                    className={errors.senderAddress?.postCode ? "error" : ""}
                                    type="text"
                                    id='senderPostCode'
                                    {...register("senderAddress.postCode", { required: true })}
                                />
                            </InputContainer>
                            <InputContainer>
                                <LabelContainer>
                                    <InputLabel htmlFor="senderCountry">
                                        Country
                                    </InputLabel>
                                    {errors.senderAddress?.country && (
                                        <ErrorLabel>can't be empty</ErrorLabel>
                                    )}
                                </LabelContainer>
                                <input
                                    className={errors.senderAddress?.country ? "error" : ""}
                                    type="text"
                                    id='senderCountry'
                                    {...register("senderAddress.country", { required: true })}
                                />
                            </InputContainer>
                        </InputDividedContainer>
                    </BillFromContainer>
                    <BillToContainer>
                        <FormHeading>Bill To</FormHeading>
                        <InputContainer>
                            <LabelContainer>
                                <InputLabel htmlFor="clientName">
                                    Client's Name
                                </InputLabel>
                                {errors.clientName && (
                                    <ErrorLabel>can't be empty</ErrorLabel>
                                )}
                            </LabelContainer>
                            <input
                                className={
                                    errors.clientName ? "full error" : "full"
                                }
                                type="text"
                                id="clientName"
                                {...register("clientName", { required: true })}
                                />
                        </InputContainer>
                        <InputContainer>
                            <LabelContainer>
                                <InputLabel htmlFor="clientEmail">
                                    Client's Email
                                </InputLabel>
                                {errors.clientEmail && (
                                    <ErrorLabel>{errors.clientEmail.message}</ErrorLabel>
                                )}
                            </LabelContainer>
                            <input
                                className={
                                    errors.clientEmail ? "full error" : "full"
                                }
                                type="email"
                                id="clientEmail"
                                {...register("clientEmail", { required: true })}
                            />
                        </InputContainer>
                        <InputContainer>
                            <LabelContainer>
                                <InputLabel htmlFor="clientStreet">
                                    Street Address
                                </InputLabel>
                                {errors.clientAddress?.street && (
                                    <ErrorLabel>can't be empty</ErrorLabel>
                                )}
                            </LabelContainer>
                            <input
                                className={
                                    errors.clientAddress?.street ? "full error" : "full"
                                }
                                type="text"
                                id="clientStreet"
                                {...register("clientAddress.street", { required: true })}
                                />
                        </InputContainer>
                        <InputDividedContainer>
                            <InputContainer>
                                <LabelContainer>
                                    <InputLabel htmlFor="clientCity">
                                        City
                                    </InputLabel>
                                    {errors.clientAddress?.city && (
                                        <ErrorLabel>can't be empty</ErrorLabel>
                                    )}
                                </LabelContainer>
                                <input
                                    className={errors.clientAddress?.city ? "error" : ""}
                                    type="text"
                                    id='clientCity'
                                    {...register("clientAddress.city", { required: true })}
                                />
                            </InputContainer>
                            <InputContainer>
                                <LabelContainer>
                                    <InputLabel htmlFor="clientPostCode">
                                        Post Code
                                    </InputLabel>
                                    {errors.clientAddress?.postCode && (
                                        <ErrorLabel>can't be empty</ErrorLabel>
                                    )}
                                </LabelContainer>
                                <input
                                    className={errors.clientAddress?.postCode ? "error" : ""}
                                    type="text"
                                    id='clientPostCode'
                                    {...register("clientAddress.postCode", {
                                        required: true,
                                    })}
                                />
                            </InputContainer>
                            <InputContainer>
                                <LabelContainer>
                                    <InputLabel htmlFor="clientCountry">
                                        Country
                                    </InputLabel>
                                    {errors.clientAddress?.country && (
                                        <ErrorLabel>can't be empty</ErrorLabel>
                                    )}
                                </LabelContainer>
                                <input
                                    className={errors.clientAddress?.country ? "error" : ""}
                                    type="text"
                                    id='clientCountry'
                                    {...register("clientAddress.country", {
                                        required: true,
                                    })}
                                />
                            </InputContainer>
                        </InputDividedContainer>
                    </BillToContainer>
                    <DropdownContainer>
                        <InputContainer>
                            <LabelContainer>
                                <InputLabel htmlFor = "createdAt">Invoice Date</InputLabel>
                                {errors.createdAt && <ErrorLabel>date must be selected</ErrorLabel>}
                            </LabelContainer>
                            <Controller
                                name="createdAt"
                                control={control}
                                rules={{ required: true}}
                                render={({ field: { onChange, value } }) => (
                                    <DatePicker   
                                        value={value}
                                        onChange={onChange}
                                        error={errors.createdAt}
                                        isSubmit = {isSubmit}
                                        setIsSubmit = {setIsSubmit}
                                        isDarkMode = {isDarkMode}
                                        invoiceData = {invoiceData}
                                        isFormEdit = {isFormEdit}
                                    />
                                )}
                            />
                        </InputContainer>
                        <InputContainer>
                            <LabelContainer>
                                <InputLabel htmlFor = "paymentTerms">Payment Terms</InputLabel>
                                {errors.paymentTerms && <ErrorLabel>select a payment term</ErrorLabel>}
                            </LabelContainer>
                            <Controller 
                                name="paymentTerms"
                                control = {control}
                                rules={{ required: true}}
                                render={({ field: { onChange, value} }) => (
                                    <FormDropdown 
                                        value={value}
                                        onChange={onChange}
                                        error={errors.paymentTerms}
                                        isSubmit = {isSubmit}
                                        setIsSubmit = {setIsSubmit}
                                        isDarkMode = {isDarkMode}
                                        invoiceData = {invoiceData}
                                        isFormEdit = {isFormEdit}
                                    />
                                )}
                            />
                        </InputContainer>
                        <InputContainer>
                            <LabelContainer>
                                <InputLabel htmlFor = "description">Project Description</InputLabel>
                                {errors.description && <ErrorLabel>add a project description</ErrorLabel>}
                            </LabelContainer>
                            <input 
                                className={errors.description ? "error" : ""}
                                type='text'
                                id='description'
                                {...register("description", {
                                    required: true,
                                })}
                            />
                        </InputContainer>
                    </DropdownContainer>
                    <ItemContainer>
                        <ItemListHeading>Item List</ItemListHeading>
                        {fields.length >= 1 &&
                            <ItemListContainer>
                                    <LabelContainer className='item-heading'>
                                        <InputLabel>Item Name</InputLabel>
                                    </LabelContainer>
                                    <LabelContainer className='item-heading'>
                                        <InputLabel>Qty.</InputLabel>
                                    </LabelContainer>
                                    <LabelContainer className='item-heading'>
                                        <InputLabel>Price</InputLabel>
                                    </LabelContainer>
                                    <LabelContainer className='item-heading'>
                                        <InputLabel>Tot.</InputLabel>
                                    </LabelContainer>
                            </ItemListContainer>
                        }
                            {fields.map((field, index) => {
                                return (
                                <ItemListContainer key={field.id}>
                                    <ItemListInputContainer id='nameContainer'>
                                        <LabelContainer className="mapped-field">
                                            <InputLabel>Item Name</InputLabel>
                                        </LabelContainer>
                                        <input
                                            className={
                                                errors.items && errors.items[index]?.name ? "error" : ""
                                            }
                                            type="text"
                                            role={`name${index}`}
                                            placeholder="Item Name"
                                            {...register(`items.${index}.name`, {
                                                required: true 
                                            })}
                                        />
                                    </ItemListInputContainer>
                                    <ItemListInputContainer id='quantityContainer'>
                                        <LabelContainer className="mapped-field">
                                            <InputLabel>Qty.</InputLabel>
                                        </LabelContainer>
                                        <input
                                            className={
                                                errors.items && errors.items[index]?.quantity ? "error" : ""
                                            }
                                            type="number"
                                            step="any"
                                            role={`quantity${index}`}
                                            placeholder="Quantity"
                                            {...register(`items.${index}.quantity`, {
                                                required: true,
                                                valueAsNumber: true
                                            })}
                                        />
                                    </ItemListInputContainer>
                                    <ItemListInputContainer id='priceContainer'>
                                        <LabelContainer className="mapped-field">
                                            <InputLabel>Price</InputLabel>
                                        </LabelContainer>
                                        <input
                                            className={
                                                errors.items && errors.items[index]?.price ? "error" : ""
                                            }
                                            type="number"
                                            step="any"
                                            role={`price${index}`}
                                            placeholder="Price"
                                            {...register(`items.${index}.price`, {
                                                required: true,
                                                valueAsNumber:true
                                            })}
                                        />
                                    </ItemListInputContainer>
                                    <TotalPriceContainer id='totalContainer'>
                                        <LabelContainer className="mapped-field">
                                            <InputLabel htmlFor='totalPrice'>Total</InputLabel>
                                        </LabelContainer>
                                        <TotalInputContainer>
                                            <input
                                                defaultValue={(
                                                    Number(watch([`items.${index}.quantity`])) *
                                                    Number(watch([`items.${index}.price`]))
                                                ).toFixed(2)}
                                                role={`total${index}`}
                                                placeholder="Total Price"
                                                type="number"
                                                {...register(`items.${index}.total`, {
                                                    valueAsNumber: true,
                                                })}
                                                onChange={handleTotalPrice(index)}
                                                className={
                                                    errors.items && errors.items[index]?.price ? "error" : ""
                                                }
                                                disabled 
                                            />
                                            {/* <SVG role={`remove${index}`} onClick={() =>{
                                                remove(index)
                                            }} src="\assets\icon-delete.svg" /> */}
                                        </TotalInputContainer>
                                    </TotalPriceContainer>
                                </ItemListContainer>
                                )
                            })}
                    </ItemContainer>
                    <AddButton type="button" onClick={() =>{append({})}}>
                        + Add New Item
                    </AddButton>
                    {errors.items && 
                        <ErrorLabel>- An item must be added and filled out</ErrorLabel>
                    }
                    {!isFormEdit ? 
                    <NewButtonContainer>
                        <div>
                            <DiscardButton onClick={handleClose}>Discard</DiscardButton>
                        </div>
                        <div>
                            <DraftButton type="button" onClick={onSave}>Save as Draft</DraftButton>
                            <MainButton name='submit-btn' type="submit">Save & Send</MainButton>
                        </div>
                    </NewButtonContainer>
                    :
                    <NewButtonContainer>
                        <div>
                            <CancelButton onClick={handleClose}>Cancel</CancelButton>
                        </div>
                        <div>
                            <DraftButton type="button" onClick={onSave}>Save Changes</DraftButton>
                            <MainButton name='submit-btn' type="submit">Save & Send</MainButton>
                        </div>
                    </NewButtonContainer>
                    }
                    <input
                        {...register("id")}
                        type='hidden'
                        role='form-id'
                        defaultValue={isFormEdit ? invoiceData.id : generateID()}
                    />
                    <input
                        {...register("total")}
                        type='hidden'
                        role='form-total'
                        defaultValue={0}
                    />
                    <input
                        {...register("status")}
                        value={'pending'}
                        type='hidden'
                        role='form-status'
                    />
                    <input
                        {...register("paymentDue")}
                        type='hidden'
                        role='form-payment-due'
                    />
                </Form>
            </FormContainer>
        </ThemeProvider>
    );
}