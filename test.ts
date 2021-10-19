const arr : number[] = [1, 2, 3, 4, 5]
const arr2 : Array<number> = [4, 5, 6, 7, 8]

//Tuple кортеж

const arr3: [string, number] = ['Hello', 12345]

let testAny: any = 42

testAny = 'hghghghghgh'

//Function

function sayMyName(name: string) : void {
    console.log(name)
}

sayMyName('Vasiliy')

//never

function throwError(message: string): never {
    throw new Error(message)
}

// Type

type Login = string

const login: Login = 'admin'

type ID = string | number

const id: ID = 12345
const id2: ID = '123'

// interface

interface Rect {
    readonly id: string // only for reading
    color?: string // not important field
    size: {
        width: number
        height: number
    }
}

const rect1: Rect = {
    id: '123',
    size: {
        width: 123,
        height: 225
    }
}

rect1.color = 'black'

const react3 = {} as Rect // add type for react3
const react4 = <Rect>{} // other type of defined obj

interface RectWithArea extends Rect {
    getArea: () => number
}

const rect5: RectWithArea = {
    id: '111',
    size: {
        width: 333,
        height: 444
    },
    getArea(): number {
        return this.size.width * this.size.height
    }
}

interface IClock {
    time: Date
    setTime(date: Date): void
}

class Clock implements IClock {
    time: Date = new Date()
    setTime(date: Date): void {
        this.time = date
    }
}

// stylesheet

interface Styles {
    [key: string]: string
}

const css: Styles = {
    borderRadius: '50px',
    marginTop: '10px'
}

//enum 

enum Membership {
    Simple,
    Standard,
    Premium
}

const membership = Membership.Standard
const membershipReverse = Membership[2]

console.log(membership) // 1
console.log(membershipReverse)

enum SocialMedia {
    VK = 'VK',
    FACEBOOK = 'FACEBOOK',
    INSTAGRAM = 'INSTAGRAM'
}

const getMedia = SocialMedia.INSTAGRAM

console.log(getMedia)

// functions 

function addNumber(a: number, b: number): number {
    return a ** b
}

function toUpperCase(str: string): string {
    return str.trim().toUpperCase()
}
