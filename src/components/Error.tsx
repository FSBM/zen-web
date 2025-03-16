interface Props {
    error: string;
  }
  
  export const InputError = ({ error }: Props) => {
    return (
      <p className="text-red-500 font-light text-sm">{error}</p>
    );
  };