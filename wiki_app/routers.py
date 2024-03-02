from rest_framework import routers

from .viewsets import ServicioViewSet

router = routers.DefaultRouter()

router.register(r'servicio', ServicioViewSet, basename='servicio') #Register Servicio model

urlpatterns = router.urls