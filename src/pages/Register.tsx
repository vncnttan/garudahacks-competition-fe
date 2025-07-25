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
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRegisterMutation } from "@/api/mutation/use-auth-mutations.ts";
import maknaIcon from "@/assets/makna-remove-bg.png";

export default function Register() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const { mutate, isPending } = useRegisterMutation({
    onSuccess: () => {
      navigate("/login");
    },
    onError: () => {
      setError("Registration failed!");
    },
  });

  const handleRegister = () => {
    if (!username || !password || !confirmPassword) {
      setError("All fields must be required!");
    } else if (password !== confirmPassword) {
      setError("Password and Confirm Password don't match!");
    } else if (password.length < 8) {
      setError("Password length must be at least 8 characters!");
    } else if (confirmPassword.length < 8) {
      setError("Confirm Password length must be at least 8 characters!");
    } else {
      mutate({
        username: username,
        password: password,
        confirmPassword: confirmPassword,
      });
    }
  };

  return (
    <div className="w-screen h-screen bg-black flex flex-col items-center justify-center">
      <a href="/" className="mb-12">
        <img src={maknaIcon} alt="Makna Icon" className="w-48" />
      </a>
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">Register</CardTitle>
          <CardDescription>
            Enter your details to create an account.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <Label htmlFor="username">Username *</Label>
              <Input
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
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="confirmPassword">Confirm Password *</Label>
              <Input
                type="password"
                id="confirmPassword"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <div className="text-xs">
              Already have an account?
              <a href="/login" className="text-primary hover:underline px-1">
                Login Here
              </a>
            </div>

            {error !== "" && <Label className="text-primary">{error}</Label>}

            <Button onClick={handleRegister} disabled={isPending}>
              {isPending ? "Registering..." : "Register"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
