import userEvent from '@testing-library/user-event';
import { render, screen, act } from '@testing-library/react';
import faker from 'faker';

import { SignUp } from '../index';
import { usePost } from '../../../hooks/usePost';

jest.mock('../../../hooks/usePost');

describe('SignUp', () => {
  const mockUsePost = usePost as jest.MockedFunction<typeof usePost>;
  const mockMakePostRequest = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should render the spinner component inside the button component when the post request is in progress', async () => {
    mockUsePost.mockReturnValue({
      makePostRequest: mockMakePostRequest,
      isLoading: true
    });

    render(<SignUp />);

    const spinner = screen.getByTestId('spinner');

    expect(spinner).toBeTruthy();
  });

  it('Should render a text inside the button component when there is no post request in progress', async () => {
    mockUsePost.mockReturnValue({
      makePostRequest: mockMakePostRequest,
      isLoading: false
    });

    render(<SignUp />);

    const createAccountButton = screen.getByRole('button', { name: 'Criar Conta' });

    expect(createAccountButton).toBeTruthy();
  });

  xit('Should render the required input error messages', async () => {
  });

  xit('Should render the input length error messages', async () => {
  });

  xit('Should render the email input error message', async () => {
  });

  it('Should call the onSubmit handler if the form is invalid', async () => {
    mockUsePost.mockReturnValue({
      makePostRequest: mockMakePostRequest,
      isLoading: false
    });

    render(<SignUp />);

    const createAccountButton = screen.getByRole('button', { name: 'Criar Conta' });

    await act(async () => {
      userEvent.click(createAccountButton);
    });

    expect(mockMakePostRequest).not.toHaveBeenCalled();
  });

  it("Should not call the onSubmit handler if the form is valid", async () => {
    mockUsePost.mockReturnValue({
      makePostRequest: mockMakePostRequest,
      isLoading: false
    });

    render(<SignUp />);

    const nameInput = screen.getByPlaceholderText('Nome');
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Senha');
    const createAccountButton = screen.getByRole('button', { name: 'Criar Conta' });
    const nameInputValue = faker.name.findName();
    const emailInputValue = faker.internet.email();
    const passwordInputValue = faker.internet.password();

    await act(async () => {
      userEvent.type(nameInput, nameInputValue);
      userEvent.type(emailInput, emailInputValue);
      userEvent.type(passwordInput, passwordInputValue);
      userEvent.click(createAccountButton);
    });

    expect(mockMakePostRequest).toHaveBeenCalledWith({
      name: nameInputValue,
      email: emailInputValue,
      password: passwordInputValue
    });
  });
});
