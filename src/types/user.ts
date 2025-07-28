export type User = {
    name: string | null,
    id: string | null,
    avatar: null | string
}

export type UserField = {
    name: string,
    error: null | string
}

export type UserMode = 'edit' | 'create' | null