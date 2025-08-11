import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useAuth } from '@/contexts/AuthContext';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';
import { Logo } from "@/components/ui/logo";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormData = z.infer<typeof loginSchema>;

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login, isLoading } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      setError("");
      await login(data.email, data.password);
      navigate("/dashboard");
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left marketing content */}
      <div className="hidden md:flex flex-col justify-center items-center bg-indigo-400 text-white p-12 w-1/2 space-y-8">
        <h1 className="text-4xl font-bold">Affiliate campaigns</h1>
        <p className="text-lg max-w-md text-center">
          Track content, engagements, clicks, real revenue and pay your
          affiliates.
        </p>
        <div className="relative flex space-x-4 bg-indigo-300 rounded-xl p-6 shadow-lg">
          <img
            src="/assets/sample1.jpg"
            alt="Sample 1"
            className="rounded-lg shadow-lg w-24 h-32 object-cover"
          />
          <img
            src="/assets/sample2.jpg"
            alt="Sample 2"
            className="rounded-lg shadow-lg w-24 h-32 object-cover"
          />
          <img
            src="/assets/sample3.jpg"
            alt="Sample 3"
            className="rounded-lg shadow-lg w-24 h-32 object-cover"
          />
          {/* Overlay discount code */}
          <div className="absolute top-4 left-20 bg-white rounded-md p-2 shadow-md text-indigo-900 font-semibold text-sm flex items-center space-x-2">
            <img
              src="/assets/shopify-logo.png"
              alt="Shopify"
              className="w-4 h-4"
            />
            <span>Discount code</span>
            <span className="font-bold">EMMA20</span>
          </div>
          {/* Overlay stats */}
          <div className="absolute bottom-4 left-4 bg-white rounded-md p-2 shadow-md text-indigo-900 text-sm space-y-1">
            <div className="flex items-center space-x-1">
              <svg
                className="w-4 h-4 text-indigo-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M6 2a1 1 0 00-1 1v14a1 1 0 001 1h8a1 1 0 001-1V7.414a1 1 0 00-.293-.707l-4.414-4.414A1 1 0 0010.586 2H6z" />
              </svg>
              <span>287</span>
            </div>
            <div className="flex items-center space-x-1">
              <svg
                className="w-4 h-4 text-indigo-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5z" />
              </svg>
              <span>154</span>
            </div>
            <div className="flex items-center space-x-1">
              <svg
                className="w-4 h-4 text-indigo-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M3 3h14v14H3V3z" />
              </svg>
              <span>76.8k</span>
            </div>
          </div>
          {/* Overlay total revenue */}
          <div className="absolute bottom-4 right-4 bg-white rounded-md p-2 shadow-md text-indigo-900 font-semibold text-sm">
            Total revenue
            <div className="text-lg font-bold">$13,110.00</div>
          </div>
          {/* Shopify logo overlay */}
          <div className="absolute top-20 right-4 bg-white rounded-md p-2 shadow-md">
            <img
              src="/assets/shopify-logo.png"
              alt="Shopify"
              className="w-12 h-6 object-contain"
            />
          </div>
        </div>
        <div className="flex space-x-6 mt-8 text-white font-bold text-lg">
          <span>Bolt</span>
          <span>Joom</span>
          <span>Wolt</span>
          <span>Kilo.Health</span>
        </div>
      </div>

      {/* Right login form */}
      <div className="flex flex-col justify-center items-center p-12 w-full md:w-1/2 bg-white">
        <Link to="/" className="mb-8 flex items-center space-x-2">
          <Logo size="lg" showText={false} />
          <span className="text-2xl font-bold">GEN-AI</span>
        </Link>
        <Card className="w-full max-w-md border border-gray-200 shadow-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-xl font-semibold">
              Welcome back
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <Button
                variant="outline"
                className="w-full flex items-center justify-between"
              >
                <FcGoogle className="text-xl" />
                <span>Continue as Poorva</span>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                  alt="Google"
                  className="w-6 h-6"
                />
              </Button>

              <div className="flex items-center my-4">
                <div className="flex-grow border-t border-gray-200"></div>
                <span className="mx-3 text-gray-400 text-sm">OR</span>
                <div className="flex-grow border-t border-gray-200"></div>
              </div>

              <div className="space-y-1">
                <Label htmlFor="email">Work email address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Work email address"
                    className="pl-10"
                    {...register("email")}
                  />
                </div>
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="pl-10 pr-10"
                    {...register("password")}
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-3"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-400" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-400" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-sm text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="remember"
                  className="rounded border-gray-300"
                />
                <Label htmlFor="remember">Keep me logged in</Label>
              </div>

              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700"
                disabled={isLoading}
              >
                {isLoading ? "Signing in..." : "Log in"}
              </Button>
            </form>

            <div className="text-center mt-4">
              <Link
                to="/forgot-password"
                className="text-sm text-gray-600 hover:underline"
              >
                Forgot password?
              </Link>
            </div>
          </CardContent>

          <CardFooter className="justify-center text-sm">
            <span className="text-gray-600">Don't have an account yet?</span>
            <Link to="/signup" className="ml-1 text-blue-600 hover:underline">
              Sign up now
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Login;
