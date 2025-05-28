export type ContainerProps={
    style:React.CSSProperties;
}

export type userDataType={
    name:string;
    email:string;
}

export type BottonType={
    styles:React.CSSProperties;
}

export type AuthUser={
    email:string;
    firstname:string;
}
export type provider={
    children:React.ReactNode
}
export type Uservalue={
    user:AuthUser |null;
    setUser:React.Dispatch<React.SetStateAction<AuthUser | null>>;
}