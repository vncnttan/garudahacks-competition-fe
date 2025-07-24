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

export default function Register() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  // const mutation = useMutation({
  //     mutationFn: async () => {
  //         const res = await axios.post(`${import.meta.env.VITE_API_URL}/auth/signup`, {
  //             username,
  //             password,
  //             confirmPassword,
  //         });
  //         return res.data;
  //     },
  //     onSuccess: () => {
  //         navigate("/login");
  //     },
  //     onError: (err: any) => {
  //         const message = err?.response?.data?.message;
  //         setError(message);
  //     },
  // });

  const { mutate, isPending } = useRegisterMutation();

  const handleRegister = () => {
    mutate({
      username: username,
      password: password,
      confirmPassword: confirmPassword,
    });
  };

  return (
    <div className="w-screen h-screen bg-black flex items-center justify-center">
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
