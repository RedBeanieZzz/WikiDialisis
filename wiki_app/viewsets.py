from rest_framework import viewsets, permissions

from .serializers import ServicioSerializer
from .models import Servicio

#Only for Servicio model, need it on the content site

class ServicioViewSet(viewsets.ModelViewSet):
    queryset = Servicio.objects.all()
    serializer_class = ServicioSerializer
    permission_classes = [permissions.AllowAny] 

#The blog modeling goes below