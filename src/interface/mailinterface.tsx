interface Mail {
    body:  string,
        contact: {
            email: string,
            firstname: string,
            lastname: string,
            phone: number
        },
        date: Date,
        id: number,
        read: boolean,
        subject: string,
        type: string
}
export default Mail