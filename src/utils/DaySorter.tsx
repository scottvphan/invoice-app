const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

export const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

export const getNumberOfDaysInMonth = (year:any, month:any) =>{
    return new Date(year, month + 1, 0).getDate()
}

export const range = (start:number, end:number) =>{
    const length = Math.abs((end - start) / 1)

    const { result } = Array.from({ length }).reduce(
        ({result, current}) => ({
            result: [...result, current],
            current: current + 1,
        }),
        { result: [], current: start}
    )

    return result
}