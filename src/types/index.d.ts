export interface StarI {
    rate: number
    text: string
}

export interface MsgI {
    msg: StarI | undefined
}

export interface FormI {
    msg: StarI | undefined
    setMsg: React.Dispatch<React.SetStateAction<StarI | undefined>>
}