export interface StarI {
    rate: number
    text: string
}

export interface FormI {
    msg: StarI | undefined
    setMsg: React.Dispatch<React.SetStateAction<StarI | undefined>>
}