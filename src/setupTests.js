import '@testing-library/jest-dom'

import { beforeAll, afterEach, afterAll } from 'vitest'
import { server } from './mocks/server'

// Establish API mocking before all tests
beforeAll(() => server.listen())

// Reset anyrequest hanlers that we may add during the tests
// do they don't affecr other tests
afterEach(() => server.resetHandlers())

// Clean uo after the tests finished
afterAll(() => server.close())
