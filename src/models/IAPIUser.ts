export interface UserRegisterParams {
	email: string,
	password: string,
	fullName: string
};

export interface UserLoginParams {
	email: string,
	password: string,
};

export interface UserAuthResponse {
	fullName: string,
	email: string,
	_id: string,
	createdAt: string,
	updatedAt: string,
	__v: number,
	token: string
}