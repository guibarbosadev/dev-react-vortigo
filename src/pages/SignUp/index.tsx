import React from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import type { User } from '../../user/types';
import { FirstStep } from './FirstStep';
import { SecondStep } from './SecondStep';
import { useUser } from '../../user/user-context';
import type { TPokemonType } from '../../pokemon/types';

export const SignUpPage = () => {
    const history = useHistory();
    const [values, setValues] = React.useState<User>();
    const { saveUser } = useUser();

    const advanceToSecondStep = React.useCallback(
        (name: string) => {
            const currentValues = values ? { ...values } : {};
            setValues({ ...currentValues, name, favoritePokemonType: values?.favoritePokemonType ?? 'water' });
            history.push('/sign-up/favorite-pokemon');
        },
        [values]
    );

    const handleSubmit = React.useCallback(
        async (favoritePokemonType: TPokemonType) => {
            const user: User = {
                name: values?.name ?? '',
                favoritePokemonType
            };
            await saveUser(user);
            history.push('/pokemons');
        },
        [values]
    );

    return (
        <Switch>
            <Route exact path="/sign-up/name">
                <FirstStep defaultValues={values} handleSubmit={advanceToSecondStep} />
            </Route>
            <Route exact path="/sign-up/favorite-pokemon">
                <SecondStep defaultValues={values} handleBack={history.goBack} handleSubmit={handleSubmit} />
            </Route>
            <Redirect to="/sign-up/name" />
        </Switch>
    );
};
