import sinon from 'sinon'
import mongoose from 'mongoose'
import 'sinon-mongoose'

//Importing our todo model for our unit testing.
import  {Basket} from '../../src/models/Basket'

const sum = (a,b) => a + b

describe('Sum', () => {
  it('should add two numbers', () => {
    const RESULT = sum(3, 2)
  
    expect(RESULT).toBe(5)
  })
}) 