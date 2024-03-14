from rest_framework import  serializers
from .models import Servicio, Tipo_servicio

#defining services serializers but read only.

class ServicioSerializer (serializers.ModelSerializer):

    class Meta:
        model = Servicio
        fields = '__all__'
        
class TipoSerializer (serializers.ModelSerializer):

    class Meta:
        model = Tipo_servicio
        fields = '__all__'