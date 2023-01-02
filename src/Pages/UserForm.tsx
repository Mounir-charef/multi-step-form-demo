import FormWrapper from "../FormWrapper";

type UserData = {
    firstName: string,
    lastName: string,
    age: string,
}


type userFormProps = UserData & {
    updateFields: (fields: Partial<UserData>) => void
}

export default function UserForm({ firstName, lastName, age, updateFields}: userFormProps) {
    return (
        <>
            <FormWrapper title="User Details">
                <label htmlFor='name'>First Name</label>
                <input id='name' type="text" autoFocus required
                       value={firstName} onChange={e => updateFields({firstName: e.target.value})}/>
                <label htmlFor='last-name'>Last Name</label>
                <input id='last-name' type="text" required
                       value={lastName} onChange={e => updateFields({lastName: e.target.value})}/>
                <label htmlFor='age'>Age</label>
                <input id='age' type="number" required min={1}
                        value={age} onChange={e => updateFields({age: e.target.value})}/>
            </FormWrapper>
        </>
    )
}