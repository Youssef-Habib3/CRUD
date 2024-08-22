import { AiOutlinePlus } from "react-icons/ai";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <h1 className="text-3xl font-bold">Crud app with Redux</h1>
      <Link href="/create" className="my-4 mb-5 block">
        <Button variant="default">
          Create <AiOutlinePlus className="w-4 h-4" />
        </Button>
      </Link>
    </header>
  );
};

export default Header;
