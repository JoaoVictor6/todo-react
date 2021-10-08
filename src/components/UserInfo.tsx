export default function UserInfo({ name }: {name: string}):JSX.Element {
  return (
    <div data-testid="name">
      {name}
    </div>
  );
}
