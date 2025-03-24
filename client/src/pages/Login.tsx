import "./pageStyles/grid.css";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Link} from "react-router-dom";


const formSchema = z.object({
  userId: z.string(),
  password: z.string(),
});

export default function Login() {
 
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userId: "",
      password: "",
    },
  });

  
  return (
    <div className="__login grid-bg w-full h-[calc(100dvh-60px)] flex justify-center items-center flex-col gap-3">
      <div className="__form_container h-full sm:h-fit bg-black border-[1px] py-8 px-4 flex flex-col gap-5 w-full sm:w-[300px]">
        <div className="">
          <h1 className="font-mono text-4xl font-bold text-left">Login</h1>
          <p className="font-mono text-xs">Welcome back fellow coder 😁</p>
        </div>
        <Form {...form}>
          <form
            
            className="flex flex-col gap-2"
          >
            <FormField
              control={form.control}
              name="userId"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      required
                      //disabled={isLoading}
                      placeholder="Username or Email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      required
                      //disabled={isLoading}
                      type="password"
                      placeholder="Password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button  className="w-full" type="submit">
              Login
            </Button>
          </form>
        </Form>
        <small className="text-xs font-mono">
          Don't have an account?{" "}
          <Link className=" text-blue-500" to="/signup">
            Signup
          </Link>
          .
        </small>
      </div>
    </div>
  );
}
