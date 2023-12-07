def contar_vocales(username):
    """Esta función recibe un nombre de usuario y devuelve la cantidad 
    de vocales que hay en él"""

    vocales = 'aeiouAEIOU'
    return len([char for char in username if char in vocales])
