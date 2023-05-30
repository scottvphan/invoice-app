import { expect, afterEach} from 'vitest'
import { cleanup } from '@testing-library/react'
import matchers from "@testing-library/jest-dom/matchers"

expect.extend(matchers)

afterEach(()=>{
    cleanup()
})
// beforeAll(() => server.listen())

// afterEach(() => server.resetHandlers())

// afterAll(() => server.close()) 
