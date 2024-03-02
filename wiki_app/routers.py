from rest_framework import routers

from viewsets import ServicioViewSet

router = routers.SimpleRouter()

router.register(r'servicio', ServicioViewSet, basename = 'servicio') #Register Servicio model

urlpatterns = router.urls