from rest_framework import viewsets, permissions

from .serializers import ServicioSerializer, TipoSerializer
from .models import Servicio, Tipo_servicio

#Only for Servicio model, need it on the content site

class ServicioViewSet(viewsets.ModelViewSet):
    queryset = Servicio.objects.all()
    serializer_class = ServicioSerializer
    permission_classes = [permissions.AllowAny] 

class TipoViewSet(viewsets.ModelViewSet):
    queryset = Tipo_servicio.objects.all()
    serializer_class = TipoSerializer
    permission_classes = [permissions.AllowAny]
#The blog modeling goes below