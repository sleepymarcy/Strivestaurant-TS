export interface Reservation {
    _id?: string
    name: string
    phone: number | string
    numberOfPeople: number | string
    smoking: boolean
    dateTime: string
    specialRequests: string
}

export interface Comment {
    id: number
    rating: number
    comment: string
    author: string
    date: string
}

export interface Dish {
    id: number
    name: string
    image: string
    category: string
    label: string
    price: string
    description: string
    comments: Comment[]
}