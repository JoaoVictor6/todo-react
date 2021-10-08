import { render, screen } from '@testing-library/react';
import UserInfo from '../components/UserInfo';

describe('<UserInfor />', () => {
  test('Should be print name', async () => {
    render(<UserInfo name="joao" />);
    const component = await screen.findByTestId('name');
    expect(component).toHaveTextContent('joao');
  });
});
