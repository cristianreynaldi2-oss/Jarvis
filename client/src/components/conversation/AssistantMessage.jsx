function AssistantMessage({ message }) {
  return (
    <div className="flex justify-start">
      <div className="max-w-[75%] rounded-2xl bg-slate-800 px-4 py-3 text-slate-100 shadow">
        {message}
      </div>
    </div>
  );
}

export default AssistantMessage;
