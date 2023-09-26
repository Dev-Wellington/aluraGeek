minha_lista = [0, 5, 10, 15, 20, 25, 30]
filtro = lambda x: x > 30
minha_lista_filtrada = filter(filtro, minha_lista)
print(list(minha_lista_filtrada))