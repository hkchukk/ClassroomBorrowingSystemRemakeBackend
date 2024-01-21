import { IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator"
import { Roles } from "./Types"

export class BaseUserRequestData {
    @IsString()
    @IsNotEmpty()
    public readonly userId: string
}

export class InsertUserData {
    @IsString()
    @IsNotEmpty()
    public readonly username: string

    @IsString()
    @IsNotEmpty()
    public readonly email: string

    @IsString()
    @IsNotEmpty()
    public readonly password: string

    @IsString()
    @IsNotEmpty()
    public readonly department: string

    @IsString()
    @IsNotEmpty()
    public readonly extension: string

    @IsString()
    @IsNotEmpty()
    @IsEnum(Roles)
    public readonly role: string
}

export class UpdateUserPasswordData extends BaseUserRequestData {
    @IsString()
    @IsNotEmpty()
    public readonly oldPassword: string

    @IsString()
    @IsNotEmpty()
    public readonly newPassword: string

    @IsString()
    @IsOptional()
    public readonly confirmPassword?: string
}

export class UpdateUserData extends BaseUserRequestData {
    @IsString()
    @IsOptional()
    public readonly username?: string

    @IsString()
    @IsOptional()
    public readonly email?: string

    @IsString()
    @IsOptional()
    public readonly department?: string

    @IsString()
    @IsOptional()
    public readonly extension?: string

    @IsString()
    @IsOptional()
    @IsEnum(Roles)
    public readonly role?: string
}

export class DeleteUserData extends BaseUserRequestData {
}