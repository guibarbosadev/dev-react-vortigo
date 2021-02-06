import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { HomePage } from '../index';
import { withContext } from '../../../helpers/renderComposites';
import { userContextMock } from '../../../mocks';

describe('<HomePage /> test case', () => {
    test.todo('initially shows loading');
    test.todo('redirects to SignUpPage when has no user');
    test.todo('showns HomePage when has user');
});
