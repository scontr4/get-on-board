from function import contar_vocales

def test_sin_vocales():
    # Given
    username = "Rythm"
    # When
    resultado = contar_vocales(username) 
    # Then
    assert resultado == 0

def test_un_tipo():
    # Given
    username = "hello"
    # When
    resultado = contar_vocales(username) 
    # Then
    assert resultado == 2

def test_varios_tipos():
    # Given
    username = "OpenAI"
    # When
    resultado = contar_vocales(username) 
    # Then
    assert resultado == 4

def test_sin_letras():
    assert contar_vocales("12345") == 0 

def test_username_vacio():
    assert contar_vocales("") == 0 
