interface User {
    id: number;
    name: string;
    role?: "admin" | "user";
}

function greet(user: User): void
{
    console.log(`Bonjour ${user.name}, role: ${user.role ?? "user"}`);
}

greet({id: 1, name: "Yorane", role: "admin"});
greet({id: 2, name: "Teddy"});
