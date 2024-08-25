import { fireEvent, render, screen } from '@testing-library/react';
import BookingForm from './components/BookingForm';

test('Form Submission Validtion', () => {
  const handleSubmit = jest.fn();
  render(<BookingForm onSubmit={handleSubmit} availableTimes={[]} />);

  const firstName = screen.getByLabelText(/First Name/);
  fireEvent.change(firstName, {target: {value: "John"}});

  const lastName = screen.getByLabelText(/Last Name/);
  fireEvent.change(lastName, {target: {value: "Doe"}});

  const contactMethod = screen.getByLabelText(/Form of Contact/);
  fireEvent.change(contactMethod, {target: {value: "Email"}});

  //const contactInfo = screen.getByLabelText(/Email/);
  //fireEvent.change(contactInfo, {target: { value: "john@gmail.com"}});

  const date = screen.getByLabelText(/Choose Date/);
  fireEvent.change(date, {target: {value: "08-24-2024"}});

  const time = screen.getByLabelText(/Choose Time/);
  fireEvent.change(time, {target: {value:"17:30"}});

  const guests = screen.getByLabelText(/Number of Guests/);
  fireEvent.change(guests, {target: {value: "2"}});

  const submitBtn = screen.getByRole("button");
  fireEvent.click(submitBtn);

  expect(handleSubmit).not.toHaveBeenCalled();

  expect(firstName).toBeInTheDocument();
  expect(firstName).toHaveAttribute('required');

  expect(lastName).toBeInTheDocument();
  expect(lastName).toHaveAttribute('required');

  expect(contactMethod).toBeInTheDocument();
  expect(contactMethod).toHaveAttribute('required');

  expect(date).toBeInTheDocument();
  expect(date).toHaveAttribute('required');

  expect(time).toBeInTheDocument();
  expect(time).toHaveAttribute('required');

  expect(guests).toBeInTheDocument();
  expect(guests).toHaveAttribute('required');

  expect(submitBtn).toBeInTheDocument();
  expect(submitBtn).toHaveAttribute('disabled');
});
