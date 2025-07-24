import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Login() {
    return (
        <div className="w-screen h-screen bg-black flex items-center justify-center">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle className="text-2xl">Login</CardTitle>
                    <CardDescription>Enter your details to login into your account.</CardDescription>
                </CardHeader>

                <CardContent>
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="username">Username *</Label>
                            <Input className="w-full" id="username" placeholder="Username" />
                        </div>

                        <div className="flex flex-col gap-2">
                            <Label htmlFor="password">Password *</Label>
                            <Input type="password" className="w-full" id="password" placeholder="Password" />
                        </div>

                        <Button>Login</Button>
                    </div>

                </CardContent>
            </Card>
        </div>
    )
}