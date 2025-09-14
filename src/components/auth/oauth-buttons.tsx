import { Button } from "@/components/ui/button";
import { FaGoogle, FaFacebook } from "react-icons/fa6";

export function OAuthButtons() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Button 
        variant="outline" 
        type="button"
        className="flex items-center justify-center gap-2"
        onClick={() => console.log("Google OAuth")}
      >
        <FaGoogle className="h-4 w-4" />
        <span>Google</span>
      </Button>
      <Button 
        variant="outline" 
        type="button"
        className="flex items-center justify-center gap-2"
        onClick={() => console.log("Facebook OAuth")}
      >
        <FaFacebook className="h-4 w-4" />
        <span>Facebook</span>
      </Button>
    </div>
  );
}
