from rest_framework import  serializers
from .models import Servicio

#defining services serializers but read only.

class ServicioSerializer (serializers.ModelSerializer):

    class Meta:
        model = Servicio
        read_only_fields = '__all__'