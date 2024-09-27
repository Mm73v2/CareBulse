import Image from "next/image";
import { Button } from "./ui/button";

interface IButtonProps {
  className?: string;
  children: React.ReactNode;
  isLoading: boolean;
}

const SubmitButton = ({ isLoading, className, children }: IButtonProps) => {
  return (
    <Button
      className={className ?? "shad-primary-btn w-full"}
      disabled={isLoading}
    >
      {isLoading ? (
        <div className="flex items-center gap-4">
          <Image
            src="/assets/icons/loader.svg"
            width={24}
            height={24}
            alt="loader"
            className="animate-spin"
          />
        </div>
      ) : (
        children
      )}
    </Button>
  );
};

export default SubmitButton;
