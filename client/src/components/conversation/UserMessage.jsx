function UserMessage({ message }) {
  return (
    <div className="flex justify-end">
      <div className="max-w-[75%] rounded-2xl bg-blue-600 px-4 py-3 text-white shadow">
        {message}
      </div>
    </div>
  );
}

export default UserMessage;
