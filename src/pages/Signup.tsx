import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useAuth } from "@/contexts/AuthContext";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";
import { Logo } from "@/components/ui/logo";

const signupSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type SignupFormData = z.infer<typeof signupSchema>;

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signup, isLoading } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: SignupFormData) => {
    try {
      setError("");
      await signup(data.email, data.password, data.name);
      navigate("/dashboard");
    } catch (err) {
      setError("Failed to create account. Please try again.");
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

      {/* Right signup form */}
      <div className="flex flex-col justify-center items-center p-12 w-full md:w-1/2 bg-white">
        <Link to="/" className="mb-8 flex items-center space-x-2">
          <Logo size="lg" showText={false} />
          <span className="text-2xl font-bold">GEN-AI</span>
        </Link>
        <Card className="w-full max-w-md border border-gray-200 shadow-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-xl font-semibold">
              Create an account
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    className="pl-10"
                    {...register("name")}
                  />
                </div>
                {errors.name && (
                  <p className="text-sm text-red-500">{errors.name.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="pl-10"
                    {...register("email")}
                  />
                </div>
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
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

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    className="pl-10 pr-10"
                    {...register("confirmPassword")}
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-3"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-400" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-400" />
                    )}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="text-sm text-red-500">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700"
                disabled={isLoading}
              >
                {isLoading ? "Creating account..." : "Create account"}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="justify-center text-sm">
            <span className="text-gray-600">Already have an account?</span>{" "}
            <Link to="/login" className="ml-1 text-blue-600 hover:underline">
              Sign in
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Signup;
