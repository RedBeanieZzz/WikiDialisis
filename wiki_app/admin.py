from django.contrib import admin
from .models import Pais, Provincia, Tipo_servicio, Servicio


# Models to show.

admin.site.register(Pais)
admin.site.register(Provincia)
admin.site.register(Tipo_servicio)
admin.site.register(Servicio)