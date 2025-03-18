import UserIcon from "../icons/UserIcon";

function User() {
  return (
    <a
      href="#"
      className="ml-auto flex items-center gap-2 text-base font-bold transition-colors hover:text-orangish"
    >
      Пользователь
      <UserIcon className="h-5 w-5 fill-current" />
    </a>
  );
}

export default User;
