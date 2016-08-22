/**
 *  Profile interface
 */
export interface ProfileModel {
    
    name: string;
    email: string;
    chpassword?: boolean;
    password?: string;
    newpassword?: string;
    newrepassword?: string;
    role: string;
    modules?: any;
    active?: number;
}
