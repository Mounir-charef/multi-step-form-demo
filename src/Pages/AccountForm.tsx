import FormWrapper from "../FormWrapper";

type AccountData = {
    email: string,
    password: string,
}


type userFormProps = AccountData & {
    updateFields: (fields: Partial<AccountData>) => void
}


function AccountForm({email, password, updateFields}: userFormProps) {
    return (
        <>
            <FormWrapper title='Account'>
                <label>Email</label>
                <input type="email" autoFocus required
                    value={email} onChange={e => updateFields({email: e.target.value})} />
                <label>Password</label>
                <input type="password" required
                       value={password} onChange={e => updateFields({password: e.target.value})}/>
            </FormWrapper>
        </>
    );
}

export default AccountForm;