import { useEffect } from "react";
import { useRouter } from "next/router";

type Props = {};
const Index = (props: Props) => {
  const router = useRouter();

  useEffect(() => {
    router.push("/#initiatives");
  }, []);

  return null;
};
export default Index;
