import { useLoginMutation } from "@/api/mutation/use-auth-mutations";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { LoginResponse } from "@/types/api/Auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import maknaIcon from "@/assets/makna-remove-bg.png";

export default function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const navigate = useNavigate();

  const { mutate, isPending } = useLoginMutation({
    onSuccess: (res: LoginResponse<object>) => {
      const data = res["data"] as Record<string, string>;
      const accessToken = data["accessToken"];
      localStorage.setItem("token", accessToken);
      navigate("/");
    },
    onError: () => {
      setError("Login failed!");
    },
  });

  const handleLogin = () => {
    if (!username || !password) {
      setError("All fields must be required!");
    } else if (password.length < 8) {
      setError("Password length must be at least 8 characters!");
    } else {
      mutate({
        username: username,
        password: password,
      });
    }
  };

  return (
    <div className="w-screen h-screen bg-black flex flex-col items-center justify-center">
      <img src={maknaIcon} alt="Makna Icon" className="w-48 mb-12" />

      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your details to login into your account.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <Label htmlFor="username">Username *</Label>
              <Input
                className="w-full"
                id="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="password">Password *</Label>
              <Input
                type="password"
                className="w-full"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {error !== "" && <Label className="text-primary">{error}</Label>}

            <Button onClick={handleLogin} disabled={isPending}>
              {isPending ? "Login..." : "Login"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
