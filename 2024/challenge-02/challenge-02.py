def createFrame(names):
    max_length = max(map(lambda x: len(x), names))
    borde_superior_inferior = '*' * (max_length + 4)
    marco = f'{borde_superior_inferior}\n'
    for nombre in names:
        marco += f'* {nombre.ljust(max_length)} *\n'
    marco += borde_superior_inferior
    return marco
