import userEvent from '@testing-library/user-event';
import { UseFormRegister, FieldValues } from 'react-hook-form';
import { render, screen, act } from '@testing-library/react';

import { CustomInputProps, CustomInput } from '../index';

describe('CustomInput', () => {
  const mockRegister = jest.fn() as jest.MockedFunction<UseFormRegister<FieldValues>>;

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should render the input without any icons and error messages', async () => {
    const props: CustomInputProps = {
      name: 'someName',
      placeholder: 'somePlaceholder',
      isPassword: false,
      register: mockRegister
    };

    render(<CustomInput {...props} />);

    const closedEyeIcon = screen.queryByTestId('closedEyeIcon');
    const openEyeIcon = screen.queryByTestId('openEyeIcon');
    const errorMessage = screen.queryByText('someErrorMessage');

    expect(closedEyeIcon).not.toBeInTheDocument();
    expect(openEyeIcon).not.toBeInTheDocument();
    expect(errorMessage).not.toBeInTheDocument();
  });

  it('Should render the input with the open eye icon when it is a password input', async () => {
    const props: CustomInputProps = {
      name: 'someName',
      placeholder: 'somePlaceholder',
      isPassword: true,
      register: mockRegister
    };

    render(<CustomInput {...props} />);

    const closedEyeIcon = screen.queryByTestId('closedEyeIcon');
    const openEyeIcon = screen.getByTestId('openEyeIcon');

    expect(closedEyeIcon).not.toBeInTheDocument();
    expect(openEyeIcon).toBeInTheDocument();
  });

  it('Should show the closed eye icon and set the input type to text when the open eye icon is clicked', async () => {
    const props: CustomInputProps = {
      name: 'someName',
      placeholder: 'somePlaceholder',
      isPassword: true,
      register: mockRegister
    };

    render(<CustomInput {...props} />);

    await act(async () => {
      const openEyeIconBeforeClick = screen.getByTestId('openEyeIcon');

      userEvent.click(openEyeIconBeforeClick);
    });

    const input = screen.getByPlaceholderText('somePlaceholder') as HTMLInputElement;
    const openEyeIconAfterClick = screen.queryByTestId('openEyeIcon');
    const closedEyeIconAfterClick = screen.getByTestId('closedEyeIcon');

    expect(input.type).toBe('text');
    expect(openEyeIconAfterClick).not.toBeInTheDocument();
    expect(closedEyeIconAfterClick).toBeInTheDocument();
  });

  it('Should show the open eye icon and set the input type back to password when the closed eye icon is clicked', async () => {
    const props: CustomInputProps = {
      name: 'someName',
      placeholder: 'somePlaceholder',
      isPassword: true,
      register: mockRegister
    };

    render(<CustomInput {...props} />);

    await act(async () => {
      const openEyeIconBeforeClick = screen.getByTestId('openEyeIcon');

      userEvent.click(openEyeIconBeforeClick);
    });
    await act(async () => {
      const closedEyeIconBeforeClick = screen.getByTestId('closedEyeIcon');

      userEvent.click(closedEyeIconBeforeClick);
    });

    const input = screen.getByPlaceholderText('somePlaceholder') as HTMLInputElement;
    const openEyeIconAfterClicks = screen.getByTestId('openEyeIcon');
    const closedEyeIconAfterClicks = screen.queryByTestId('closedEyeIcon');

    expect(input.type).toBe('password');
    expect(openEyeIconAfterClicks).toBeInTheDocument();
    expect(closedEyeIconAfterClicks).not.toBeInTheDocument();
  });

  it('Should show the error message if one is passed', async () => {
    const props: CustomInputProps = {
      name: 'someName',
      placeholder: 'somePlaceholder',
      isPassword: false,
      register: mockRegister,
      errorMessage: 'someErrorMessage'
    };

    render(<CustomInput {...props} />);

    const errorMessage = screen.getByText('someErrorMessage');

    expect(errorMessage).toBeInTheDocument();
  });
});
