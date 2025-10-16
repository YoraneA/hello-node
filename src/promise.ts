function getUser(idUser: number): Promise<string>
{
    return new Promise((resolve, reject) => {
        setTimeout(
            () => resolve(`User_${idUser}`),
            1000
        );
    })
}

async function main() {
    console.log(`Chargement de l'utilisateur 42`)
    getUser(42)
        .then(user => console.log(`Utilisateur ${user} récupéré`))
        .then(() => console.log(`Fin du chargement`))
        .catch(error => console.error(error));

    console.log('Fin de main()')
}

main();