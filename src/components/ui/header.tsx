
"use client";

import { HomeIcon, ListOrderedIcon, LogInIcon, LogOutIcon, MenuIcon,   PercentSquareIcon,  SeparatorHorizontalIcon,  ShoppingCartIcon } from "lucide-react";
import { Button } from "./button";
import { Card } from "./card"
import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger,} from "@/components/ui/sheet"
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Separator } from "@radix-ui/react-separator";


const Header = () => {
  
    const {status, data} = useSession();

    const handleLoginClick = async () => {
        await signIn();
        
    }
    const handleLogoutClick = async () => {
        await signOut();
        
    }
    return (
            <Card className="flex items-center justify-between p-[1.875rem] ">                
            
            <Sheet>
                <SheetTrigger asChild >                        
                    <Button size="icon" variant="outline">
                        <MenuIcon/>
                    </Button>  
                </SheetTrigger>
                <SheetContent side="left">
                    <SheetHeader className="text-left text-lg font-semibold">
                        Menu                        
                    </SheetHeader>
                    {status === 'authenticated' && data?.user && (
                    <div className="flex flex-col ">                
                        <div className="flex items-center gap-2 py-4 ">
                        <Avatar>
                            <AvatarFallback>
                            {data.user.name?.[0].toUpperCase()}
                            </AvatarFallback>

                            {data.user.image && 
                            <AvatarImage className="py-4" src={data.user.image}>
                            </AvatarImage>}
                        {/* <Separator></Separator> */}
                        </Avatar>
                        <div className="flex flex-col">   
                            {/* <p className=" opacity-75">Olá, </p> */}
                            <p className="font-medium ">Olá, {data.user.name}</p>
                            <p className="text-sm opacity-75">Te desejamos boas Compras!</p>
                        </div>
                        </div>
                            <Separator/>
                    </div>
                    )}
                    <div className="mt-2 flex flex-col gap-3">
                        {status === "unauthenticated" && (
                        <Button onClick={handleLoginClick} variant="outline" className="w-full justify-start gap-2">
                            <LogInIcon className="" size={16}/>
                            Fazer Login  
                        </Button>
                        )}
                        <Button variant="outline" className="w-full justify-start gap-2">
                            <HomeIcon className=""/>
                            Início 
                        </Button>
                        <Button variant="outline" className="w-full justify-start gap-2">
                            <PercentSquareIcon className=""/>
                            Ofertas 
                        </Button>
                        <Button variant="outline" className="w-full justify-start gap-2">
                            <ListOrderedIcon className=""/>
                            Catálogo 
                        </Button>
                        {status === "authenticated" && (
                        <Button onClick={handleLogoutClick} variant="outline" className="w-full justify-start gap-2">
                            <LogOutIcon className="" size={16}/>
                            Fazer Logout  
                        </Button>
                        )}
                    </div>
                    
                </SheetContent>
            </Sheet>
            
                <h1 className="text-lg font-semibold">
                    <span className="text-primary">React</span>Store
                </h1>

                <Button size="icon" variant="outline">
                        <ShoppingCartIcon/>
                </Button>              
            </Card>
    );
};
 
export default Header;