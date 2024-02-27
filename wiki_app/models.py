from django.db import models

#Country model.
class Pais(models.Model):
    id = models.AutoField(primary_key = True)
    name_pais = models.CharField(max_length = 50, blank = False)
    
    def __str__(self):
        return self.name_pais

#State models.
    
class Provincia(models.Model):
    id = models.AutoField(primary_key = True)
    pais = models.ForeignKey(Pais, on_delete = models.CASCADE)
    name_provincia = models.CharField(max_length = 50, blank = False)
    
    def __str__(self):
        return self.name_provincia 
#Type of Services models.

class Tipo_servicio(models.Model):
    id = models.AutoField(primary_key = True)
    tipo_prestador = models.CharField(max_length = 30, blank = False)

    def __str__(self):
        return self.tipo_prestador 

#Services models.

class Servicio(models.Model):

    id = models.AutoField(primary_key = True)
    tipo_prestador = models.ForeignKey(Tipo_servicio, on_delete = models.CASCADE)
    nombre_prestador = models.CharField(max_length = 100, blank = False,  null=False)
    provincia = models.ForeignKey(Provincia, on_delete = models.CASCADE)
    ciudad = models.CharField(max_length = 60, blank = False)
    direccion = models.CharField(max_length = 50, blank = False)
    telefono = models.IntegerField(blank = False)
    mail = models.EmailField(max_length = 254)
    pagina_web = models.URLField(max_length = 254)
    referente = models.CharField(max_length = 50)

    def __str__(self):
        return self.nombre_prestador

'''PDFfiles models.
Corroborar de que forma puedo extraer como pdf los datos mostrados.

class PDF_Files(models.Model):
    id = models.AutoField(primary_key = True)
    tipo_prestador = models.ForeignKey(Tipo_servicio, on_delete = models.CASCADE)
    file = models.FileField()'''

#BLOG MODELS | includes tables: POST, USER, COMMENT

